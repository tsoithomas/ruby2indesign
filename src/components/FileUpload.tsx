

const FileUpload = () => {


    const openFile = (evt: React.ChangeEvent<HTMLInputElement>) => {
        let status:Array<string> = []; // Status output

        const fileObj = evt.target.files![0]; // We've not allowed multiple files.
        // See https://developer.mozilla.org/en-US/docs/Web/API/FileReader
        const reader = new FileReader();
    
        // Defining the function here gives it access to the fileObj constant.
        let fileloaded = (e:any) => {
          // e.target.result is the file's content as text
          // Don't trust the fileContents!
          // Test any assumptions about its contents!
          const fileContents = e.target.result;
          status.push(`File name: "${fileObj.name}". ` +
                      `Length: ${fileContents.length} bytes.`);
          // Show first 80 characters of the file
          const first80char = fileContents.substring(0,80);
          status.push (`First 80 characters of the file:\n${first80char}`)
          // Show the status messages
          //this.setState ({status: status.join("\n")});
        }
    
        // Mainline of the method
        fileloaded = fileloaded.bind(this);
        // The fileloaded event handler is triggered when the read completes
        reader.onload = fileloaded;
        reader.readAsText(fileObj); // read the file
    }

    return (

        <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-80 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">.TXT file only</p>
                </div>
                <input id="dropzone-file" type="file" accept=".txt" className="hidden" 
                onChange={evt => openFile(evt)}
                />
            </label>
        </div> 

    )
}

export default FileUpload