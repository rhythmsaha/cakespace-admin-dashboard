import { useState } from "react";

function UploadImage({ user }) {
    const [image, setImage] = useState("");
    const [url, setUrl] = useState(user?.avatar);

    const uploadImage = () => {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "cakespace");
        data.append("cloud_name", "desihzeid");

        fetch("https://api.cloudinary.com/v1_1/desihzeid/image/upload", {
            method: "POST",
            body: data,
        })
            .then((res) => res.json())
            .then((data) => setUrl(data.url))
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <label htmlFor="test" className="bg-red-500">
                <img src={url} className="object-contain h-20 w-20" />
                <input id="test" type="file" onChange={(e) => setImage(e.target.files[0])} className="hidden" />
            </label>
            <button className="p-2 border" onClick={uploadImage}>
                Upload
            </button>
        </div>
    );
}
export default UploadImage;
