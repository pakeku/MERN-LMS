const { BlobServiceClient } = require("@azure/storage-blob");
const path = require("path");

// Configure Azure Blob Storage
const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;
const containerName = process.env.AZURE_BLOB_CONTAINER_NAME;

if (!AZURE_STORAGE_CONNECTION_STRING || !containerName) {
  throw new Error("Azure storage configuration is missing!");
}

// Initialize BlobServiceClient
const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);

const uploadMediaToCloudinary = async (filePath) => {
  try {
    const fileName = path.basename(filePath);
    const containerClient = blobServiceClient.getContainerClient(containerName);

    // Create the container if it doesn't exist
    const exists = await containerClient.exists();
    if (!exists) {
      await containerClient.create();
    }

    // Upload the file
    const blockBlobClient = containerClient.getBlockBlobClient(fileName);
    await blockBlobClient.uploadFile(filePath);

    // Return the URL and blob name
    return {
      videoUrl: blockBlobClient.url,
      public_id: fileName, // Use the file name as the public ID
    };
  } catch (error) {
    console.error("Error uploading to Azure Blob Storage:", error);
    throw new Error("Error uploading to Cloudinary (Azure Blob Storage)");
  }
};

const deleteMediaFromCloudinary = async (publicId) => {
  try {
    const containerClient = blobServiceClient.getContainerClient(containerName);

    // Delete the blob
    const blockBlobClient = containerClient.getBlockBlobClient(publicId);
    await blockBlobClient.deleteIfExists();
  } catch (error) {
    console.error("Error deleting from Azure Blob Storage:", error);
    throw new Error("Failed to delete asset from Cloudinary (Azure Blob Storage)");
  }
};

module.exports = { uploadMediaToCloudinary, deleteMediaFromCloudinary };