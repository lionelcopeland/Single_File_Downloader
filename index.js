const downloadButton = document.getElementById("mydownload");

async function downloadFile() {
    const response = await fetch("files/test.txt");

    if (!response.ok) {
        console.log("Download failed!");
        return;
    }

    const blob = await response.blob();

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "test.txt";

    link.click();

    URL.revokeObjectURL(url);
}

downloadButton.addEventListener("click", downloadFile);