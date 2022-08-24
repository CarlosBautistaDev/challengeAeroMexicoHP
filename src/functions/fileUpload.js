const url = "https://api.imgur.com/3/upload";

export const fileUpload = async (file) => {
  const formData = new FormData();

  formData.append("image", file);
  formData.append("type", "file");

  try {
    const resp = await fetch(url, {
      method: "POST",
      body: formData,
      headers:{
        'Authorization': "Client-ID288ea29bc332702",
        "Content-Type": "multipart/form-data",
      },
    });

    if (resp.ok) {
      const fileUrl = await resp.json();
      console.log(fileUrl.data.link);
      return fileUrl.data.link;
    }
  } catch (err) {
    console.log(err);
  }
};
