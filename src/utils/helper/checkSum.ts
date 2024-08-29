import crypto from 'crypto'

const generateChecksum = (input: string, privateKey: string): string => {
  const currentTime = Math.floor(Date.now() / 1000) // Get current timestamp in seconds
  const dataWithTime = input + currentTime
  const checksum = crypto.createHmac('sha256', privateKey).update(dataWithTime).digest('hex') // Use HMAC with the secret key
  return `${checksum}:${currentTime}`
}
export default generateChecksum
