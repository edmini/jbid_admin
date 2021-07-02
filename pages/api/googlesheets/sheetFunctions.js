import { google } from 'googleapis'

export const getGoogleSheetData = async (connect, kind) => {

    let jsonData = []
    const googlesheetapi = google.sheets({ version : 'v4', auth : connect })
    const opt = {
        spreadsheetId : process.env.GOOGLE_SHEET_ID,
        range : kind+'!A:AB'
    }
    const getDatas = await googlesheetapi.spreadsheets.values.get(opt)

    if(getDatas.data.values){
        const menuData = getDatas.data.values[0] // 첫번째 행의 메뉴만 추출
        // console.table(menuData)
        const typeData = getDatas.data.values[1]
        // console.table(typeData)
        let resultDatas = getDatas.data.values
        resultDatas.shift()
        resultDatas.shift() // 전체 데이터중 첫번재 메뉴 라인 제거
        resultDatas.map((result) => {
            let tempData = {}
            for(var i = 0 ; i < menuData.length ; i++ ){
                switch(typeData[i]){
                    case ('String') :
                        tempData[menuData[i]] = result[i]
                    break
                    case ('Date') :
                        false || result[i] ? tempData[menuData[i]] = new Date(result[i]) : tempData[menuData[i]] = result[i]
                    break
                    case ('Number') :
                        false || result[i] ? tempData[menuData[i]] = parseInt(result[i].replace(/,/g, '')) : tempData[menuData[i]] = result[i]
                    break
                    case ('Boolean') :
                        false || result[i] ? tempData[menuData[i]] = JSON.parse(result[i].toLowerCase()) : tempData[menuData[i]] = result[i]
                    break
                }
            }
            jsonData.push(tempData) //json 데이터를 배열에 추가
        })
    }
    console.table(jsonData)
    return jsonData
}

export const appendGoogleSheetsData = async (connect, reqbody, kind) => { // post append function

    console.log(reqbody)
    const googlesheetapi = google.sheets({version : 'v4', auth : connect})
    const opt = {
        spreadsheetId : '1H2RQ_OIyD8MI-KoAslC0unfeCh7-McpThGGC3AXsqY0',
        range : kind,
        valueInputOption : 'USER_ENTERED',
        insertDataOption : 'INSERT_ROWS',
        resource : { values : reqbody },
        auth : connect,
    }

    const appendDatas = await googlesheetapi.spreadsheets.values.append(opt) // google sheets 마지막행에 값 추가 하기
    console.log(appendDatas)
    return {returnData : 'returned'}//return 값 지정 가능
}

