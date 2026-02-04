"use server"
export const postdataq = async (message) => {
     const result = await connect('feedbacks').insertOne({
          message,
          data: new Date()
     })
     return {
          ...result,
          insertedId: result.insertedId.toString()
     }
}