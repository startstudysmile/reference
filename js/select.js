
//动态创建下拉框选项
function optionHtml(option_data){
	option_data.forEach(function(item){		
		option_html += `
            <li>
                ${item.value}
            </li>
		`
	}
    return option_html;
}
function selectData(data,select_obj,result_obj){
	
}

