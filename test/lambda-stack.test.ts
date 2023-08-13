import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as LambdaStack from '../lib/lambda-stack';

describe('Demo Lambda', () => {

  test('That it is sucessfully created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new LambdaStack.LambdaStack(app, 'LambdaStack');
    // THEN
    const template = Template.fromStack(stack);

    template.resourceCountIs('AWS::Lambda::Function', 1);
  });
})