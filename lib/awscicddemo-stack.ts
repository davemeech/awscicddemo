import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as pipelines from 'aws-cdk-lib/pipelines'
import { AWSCICDDemoStaging } from './awscicddemo-app-stack'
import { ManualApprovalStep } from 'aws-cdk-lib/pipelines';

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
    });

    const testingStage = cicdPipeline.addStage(new AWSCICDDemoStaging(this, 'staging', {
      env: {account: '492023795884', region: 'us-east-1'}
    }));

    testingStage.addPost(new ManualApprovalStep('approval'));

    const prodStage = cicdPipeline.addStage(new AWSCICDDemoStaging(this, 'prod', {
      env: {account: '492023795884', region: 'us-east-1'}
    }));
  }
}
