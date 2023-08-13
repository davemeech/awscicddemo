import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as Awscicddemo from '../lib/awscicddemo-stack';

// example test. To run these tests, uncomment this file along with the
// example resource in lib/awscicddemo-stack.ts

describe('CI/CD CodePipeline', () => {
    test('That it is created with the expected properties', () => {
          const app = new cdk.App();
            // WHEN
          const stack = new Awscicddemo.AwscicddemoStack(app, 'MyTestStack');
            // THEN
          const template = Template.fromStack(stack);
        
          template.hasResourceProperties('AWS::SQS::Queue', {
            VisibilityTimeout: 300
          });
        });
})

