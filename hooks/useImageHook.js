import React, { useState } from 'react'

export default function useImageHook() {
    const [previewImage, setPreviewImage] = useState("")
    const onchangeImage = (e) => {
        const image = e.target.files?.[0]
        if(image.type.split("/")[0] !== "image") {
            alert("please select an image.")
            return
        }
        const reader = new FileReader();
        reader.onload = (event) => {
            if (event.target) {
                setPreviewImage(event.target.result);
            }
        };
        reader.readAsDataURL(image);
        return previewImage
    }
  return {onchangeImage, previewImage}
}
