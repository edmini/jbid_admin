// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { google } from 'googleapis'


export default async (req, res) => {
  const result = await getServerSideProps()
//   console.log(result)
  res.status(200).json({ resultData : result })
}

export async function getServerSideProps() {

  const auth = await google.auth.getClient(
    {
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    }
  )
  const sheets = google.sheets({ version : 'v4', auth})

  const range = '기술자수첩!A:AA'

  const response = await sheets.spreadsheets.values.get(
    {
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range,
    }
  )

  // console.table(response.data.values[2])
  return response.data.values

}

const makeJson = (data) =>{
  
}

