import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as pipelines from 'aws-cdk-lib/pipelines'

export class AwscicddemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // AWS CI-CD Pipeline
    const cicdPipeline = new pipelines.CodePipeline(this, 'demoPipeline', {
      synth: new pipelines.ShellStep('Synth', {
        input: pipelines.CodePipelineSource.gitHub('davemeech/awscicddemo', 'main'),
        commands: [
          'npm ci',
          'npm run build',
          'npx cdk synth',
        ]
      })
    })
  }
}
