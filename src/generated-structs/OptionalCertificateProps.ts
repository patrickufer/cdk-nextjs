// ~~ Generated by projen. To modify, edit .projenrc.ts and run "npx projen".
import type { aws_certificatemanager } from 'aws-cdk-lib';

/**
 * OptionalCertificateProps
 */
export interface OptionalCertificateProps {
  /**
   * How to validate this certificate.
   * @default CertificateValidation.fromEmail()
   * @stability stable
   */
  readonly validation?: aws_certificatemanager.CertificateValidation;
  /**
   * Enable or disable transparency logging for this certificate.
   * Once a certificate has been logged, it cannot be removed from the log.
   * Opting out at that point will have no effect. If you opt out of logging
   * when you request a certificate and then choose later to opt back in,
   * your certificate will not be logged until it is renewed.
   * If you want the certificate to be logged immediately, we recommend that you issue a new one.
   * @default true
   * @stability stable
   */
  readonly transparencyLoggingEnabled?: boolean;
  /**
   * Alternative domain names on your certificate.
   * Use this to register alternative domain names that represent the same site.
   * @default - No additional FQDNs will be included as alternative domain names.
   * @stability stable
   */
  readonly subjectAlternativeNames?: Array<string>;
  /**
   * Specifies the algorithm of the public and private key pair that your certificate uses to encrypt data.
   * @default KeyAlgorithm.RSA_2048
   * @stability stable
   */
  readonly keyAlgorithm?: aws_certificatemanager.KeyAlgorithm;
  /**
   * The Certificate name.
   * Since the Certificate resource doesn't support providing a physical name, the value provided here will be recorded in the `Name` tag
   * @default the full, absolute path of this construct
   * @stability stable
   */
  readonly certificateName?: string;
  /**
   * Fully-qualified domain name to request a certificate for.
   * May contain wildcards, such as ``*.domain.com``.
   * @stability stable
   */
  readonly domainName?: string;
}
