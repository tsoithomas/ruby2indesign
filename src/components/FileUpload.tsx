import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["TXT"];


const FileUpload = () => {
    const [progress, setProgress] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
    const [textfile, setTextfile] = useState<File>(new File([], ""));
    const [fileOrFiles, setFileOrFiles] = useState(null);

    const handleChange = (file: File) => {
        setTextfile(file);

        if (file) {
            setButtonDisabled(false);
            setProgress(0);
        }
    };

    const startConvert = () => {
        setButtonDisabled(true);

        //const fileObj = evt.target.files![0];
        const reader = new FileReader();
    
        // Defining the function here gives it access to the fileObj constant.
        let fileloaded = (e:any) => {
            const xml_head = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Root><Root>`;
            const xml_foot = `</Root></Root>`;
            let xml = "";

            let fileContents = e.target.result as string;
            const lines = fileContents.replaceAll("\r", "").split("\n");

            let characters = [] as Array<string>;
            let rubys = [] as Array<string>;

            for (let i=0; i<lines.length; i++) {

                if (i%2 == 0) {
                    // Chinese line
                    characters = lines[i].split("");
                }
                else {
                    // Ruby line
                    rubys = lines[i].split(" ");

                    for (let j=0; j<characters.length; j++) {
                        let ruby =  `<aid:ruby xmlns:aid="http://ns.adobe.com/AdobeInDesign/3.0/">` +
                                    `<aid:rbc><aid:rb>`+ characters[j] + `</aid:rb></aid:rbc>` +
                                    `<aid:rtc><aid:rt>`+ rubys[j] +`</aid:rt></aid:rtc>` +
                                    `</aid:ruby>`;
                        xml += ruby;
                    }

                    xml += "\n";
                }

                setProgress(Math.round(((i+1)/lines.length)*100));
            }

            let output = xml_head + xml + xml_foot;

            const blob = new Blob([output]);                   // Step 3
            const fileDownloadUrl = URL.createObjectURL(blob); // Step 4

            let download = document.getElementById("download") as HTMLAnchorElement;
            
            download.download = textfile.name.substr(0, textfile.name.lastIndexOf(".")) + ".xml";
            download.href = fileDownloadUrl;
            download.click();
            setFileOrFiles(null);
            setTextfile(new File([], ""));
            //dofileDownload.current!.click(); 
            //URL.revokeObjectURL(fileDownloadUrl); 
        }
    
        // Mainline of the method
        fileloaded = fileloaded.bind(this);
        // The fileloaded event handler is triggered when the read completes
        reader.onload = fileloaded;
        reader.readAsText(textfile); // read the file
    }


    return (
        <div className="relative">
            <div id="select_view" className="flex items-center justify-center rounded-lg w-full border-2 border-dashed border-gray-600">
                <FileUploader 
                    handleChange={handleChange} 
                    name="file" 
                    types={fileTypes} 
                    fileOrFiles={fileOrFiles}
                    classes="w-full text-white bg-gray-700 hover:bg-gray-600 h-80 min-h-80 cursor-pointer rounded-lg " 
                    children={
                        <div className="flex h-full flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">.TXT file only</p>
                        </div>
                    }
                    />
                <a style={{display: "none"}} id="download"></a>
            </div> 

            <div id="upload_view" className="mt-10 flex items-center justify-center w-full">
                <div className="w-full h-20 rounded-lg ps-10 pe-10">
                    <div className="flex h-full flex-col items-center justify-center py-5 text-gray-400">
                        <div className="flex flex-row w-full">
                            <div className="flex-grow-1 w-full">
                                <strong>Selected file:</strong> {textfile.name}
                            </div>
                            <div className="flex-grow-1 w-full text-right">
                                <button id="convert" disabled={buttonDisabled} onClick={startConvert} className="disabled:opacity-75 disabled:hover:bg-blue-500 w-100 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Convert file
                                </button>
                            </div>
                        </div>

                        <div className="w-full mt-10">
                            <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                                <div id="progressbar" className="h-4 bg-blue-600 rounded-full dark:bg-blue-500" style={{width: `${progress}%`}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default FileUpload