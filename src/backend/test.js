async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/krishuggingface/Kris_Text_to_Image_generator",
        {
            headers: {
                Authorization: "Bearer hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.blob();
    return result;
}

query({ "inputs": "Astronaut riding a horse" }).then((response) => {
    // Display the image on a webpage
    const url = URL.createObjectURL(response);
    const img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img);

    // Save the image as a file
    const link = document.createElement('a');
    link.href = url;
    link.download = 'generated_image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
});
