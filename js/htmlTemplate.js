//动态创建下拉框选项
function filesHtml(fileData){
	var fileHtml = `
		<div class="file-item">
            <div class="item" data-file-id="${fileData.id}">
                <lable class="checkbox"></lable>
                <div class="file-img">
                    <i></i>
                </div>
                <p class="file-title-box">
                    <span class="file-title">${fileData.title}</span>
                    <span class="file-edtor">
                        <input class="edtor" value="${fileData.title}" type="text"/>
                    </span>
                </p>
            </div>
        </div>
        `;

    return fileHtml;
}



//准备文件区域的html结构
function filesHtml(fileData){
	var fileHtml = `
		<div class="file-item">
            <div class="item" data-file-id="${fileData.id}">
                <lable class="checkbox"></lable>
                <div class="file-img">
                    <i></i>
                </div>
                <p class="file-title-box">
                    <span class="file-title">${fileData.title}</span>
                    <span class="file-edtor">
                        <input class="edtor" value="${fileData.title}" type="text"/>
                    </span>
                </p>
            </div>
        </div>
        `;

    return fileHtml;
}

