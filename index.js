/**
 * Récupération des services AWS
 */
const { DynamoDBClient, ListTablesCommand } = require("@aws-sdk/client-dynamodb");
const { S3Client, AbortMultipartUploadCommand } = require("@aws-sdk/client-s3");

// Configuration
const region = 'eu-west-3';

// (async () => {
//   const client = new DynamoDBClient({ region });
//   const command = new ListTablesCommand({});
//   try {
//     const results = await client.send(command);
//     console.log(results.TableNames.join("\n"));
//   } catch (err) {
//     console.error(err);
//   }
// })();

exports.handler = async (event) => {
  return s3.listBuckets().promise();
}