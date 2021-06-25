//connect googleapis

import { google } from 'googleapis'
import googlekey from '../../../googleapi-keys.json'
import {getGoogleSheetData, appendGoogleSheetsData} from './sheetFunctions'

const scope = 'https://www.googleapis.com/auth/spreadsheets'

const connect = new google.auth.JWT(
    googlekey.client_email,
    null,
    // process.env.GOOGLE_AUTH_KEYS.private_key,
    googlekey.private_key,
    [scope]
)
connect.authorize((err, token) => {
    if(err) {console.log(err)}
    else {console.log('google auth connected!!')}
})

export default async (req, res) => {

    switch(req.method){
        
        case('GET') :
            try {
                // let kind = '기술자수첩'
                // if(req.query.kind == 1){
                //     kind = '기술자수첩'
                // }else if(req.query.kind == 2){
                //     kind = '자격증접수'
                // }
                
                const getSheetData = await getGoogleSheetData(connect, req.query.kind) // get method
                res.status(200).json(getSheetData)
            } catch (error) {
                console.log(error)
                res.status(500).json({connect : 'connect error'})
            }
        break
        case('POST') :
            let kind = '기술자수첩'
            if(req.query.kind == 1){
                kind = '기술자수첩'
            }else if(req.query.kind == 2){
                kind = '자격증접수'
            }
            const reqBody = new Array(req.body)
            console.table(reqBody)
            const appendStatus = await appendGoogleSheetsData(connect, reqBody, kind)
            console.log(appendStatus) 
            res.status(200).json({ status : 'POST' })
        break
        case('PUT') :
            // const reqBody = new Array(req.body)
            // console.table(reqBody)
            // const updateStatus = await updateGoogleSheetsData(connect, reqBody)
            // console.log(updateStatus) 
            res.status(200).json({ status : 'PUT' })
        break
        case('DELETE') :
            // const reqid = new Array(req.body)//id
            // console.log(reqid)
            // const updateStatus = await updateGoogleSheetsData(connect, id)
            // console.log(updateStatus) 
            res.status(200).json({ status : 'PUT' })
        break
        default :
            res.status(200).json({ status : 'DEFAULT' })
    }

}
