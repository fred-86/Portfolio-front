export const generateUniqueFilename = (filename) => {
    const randomString = Math.random().toString(36).substring(2, 8)
    const timestamp = new Date().getTime()
    const extension = filename.split('.').pop()
    return `${timestamp}-${randomString}.${extension}`
}
