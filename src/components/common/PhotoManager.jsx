import React from "react";

const PhotoManager = ({ photos, onUpload, onDelete }) => {
    return (
        <div className="space-y-3">
            <p className="mb-2 font-semibold">Photos</p>
            <div className="flex flex-wrap gap-3">
                {photos.map((photo) => (
                    <div key={photo.public_id} className="relative">
                        <img
                            src={photo.url}
                            alt="Car"
                            className="w-32 h-20 object-cover rounded"
                        />
                        <button
                            type="button"
                            onClick={() => onDelete(photo.public_id)}
                            className="absolute top-0 right-0 bg-red-600 text-xs px-2 py-1 rounded"
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>
            <input
                type="file"
                onChange={onUpload}
                className="mt-2 text-sm"
                accept="image/*"
            />
        </div>
    );
};

export default PhotoManager;
