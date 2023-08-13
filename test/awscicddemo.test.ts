import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as Awscicddemo from '../lib/awscicddemo-stack';

describe('CI/CD CodePipeline', () => {

  test('That it is sucessfully created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Awscicddemo.AwscicddemoStack(app, 'MyTestStack');
    // THEN
    const template = Template.fromStack(stack);

    template.resourceCountIs('AWS::CodePipeline::Pipeline', 1);
  });
})

describe('CI/CD CodeBuild Project', () => {

  test('That it is sucessfully created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Awscicddemo.AwscicddemoStack(app, 'MyTestStack');
    // THEN
    const template = Template.fromStack(stack);

    template.resourceCountIs('AWS::CodeBuild::Project', 2);
  })
});

