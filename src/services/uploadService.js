export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_unsigned_preset"); // from Cloudinary settings

    const res = await fetch(
        `https://api.cloudinary.com/v1_1/<your-cloud-name>/upload`,
        { method: "POST", body: formData }
    );

    if (!res.ok) throw new Error("Upload failed");
    return res.json(); // { url, public_id, ... }
};

export const deleteImage = async (publicId) => {
    // You’ll likely call your backend here since signed delete requires server
    const res = await fetch(`/api/delete-image/${publicId}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Delete failed");
    return res.json();
};
