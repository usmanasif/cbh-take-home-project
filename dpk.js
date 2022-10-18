const crypto = require('crypto')

exports.deterministicPartitionKey = event => {
  const TRIVIAL_PARTITION_KEY = '0'
  const MAX_PARTITION_KEY_LENGTH = 256
  let candidate

  if (event) candidate = event.partitionKey ?? createHash(JSON.stringify(event))
  candidate = candidate && typeof candidate !== 'string' ? JSON.stringify(candidate) : TRIVIAL_PARTITION_KEY
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) candidate = createHash(candidate)

  return candidate
}

exports.createHash = data => crypto.createHash('sha3-512').update(data).digest('hex')
