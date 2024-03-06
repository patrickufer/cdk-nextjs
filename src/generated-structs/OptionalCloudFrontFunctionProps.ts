// ~~ Generated by projen. To modify, edit .projenrc.ts and run "npx projen".
import type { aws_cloudfront } from 'aws-cdk-lib';

/**
 * OptionalCloudFrontFunctionProps
 */
export interface OptionalCloudFrontFunctionProps {
  /**
   * The runtime environment for the function.
   * @default FunctionRuntime.JS_1_0 (unless `keyValueStore` is specified, then `FunctionRuntime.JS_2_0`)
   * @stability stable
   */
  readonly runtime?: aws_cloudfront.FunctionRuntime;
  /**
   * The Key Value Store to associate with this function.
   * In order to associate a Key Value Store, the `runtime` must be
   * `cloudfront-js-2.0` or newer.
   * @default - no key value store is associated
   * @stability stable
   */
  readonly keyValueStore?: aws_cloudfront.IKeyValueStore;
  /**
   * A name to identify the function.
   * @default - generated from the `id`
   * @stability stable
   */
  readonly functionName?: string;
  /**
   * A comment to describe the function.
   * @default - same as `functionName`
   * @stability stable
   */
  readonly comment?: string;
  /**
   * The source code of the function.
   * @stability stable
   */
  readonly code?: aws_cloudfront.FunctionCode;
}
