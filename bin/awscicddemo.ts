#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwscicddemoStack } from '../lib/awscicddemo-stack';

const app = new cdk.App();
new AwscicddemoStack(app, 'AwscicddemoStack', {
  env: {account: '492023795884', region: 'us-east-1'}
});