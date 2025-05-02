import { INodeProperties } from 'n8n-workflow';

// Options for integrations-api (Integration)
export const integrationsOperationsOptions: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['integrations-api'], // Value of Resource
		},
	},
	options: [
		{
			// Set/find Chatwoot
			name: 'Chatwoot',
			action: 'Chatwoot',
			description: 'Define/Find integration with Chatwoot',
			value: 'chatwoot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions of Evolution Bot
			name: 'Evolution Bot',
			action: 'Evolution bot',
			description: 'Controls integration with Evolution Bot',
			value: 'evolution-bot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions of Typebot
			name: 'Typebot',
			action: 'Typebot',
			description: 'Controls integration with Typebot',
			value: 'typebot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions of Dify
			name: 'Dify',
			action: 'Dify',
			description: 'Controls integration with Dify',
			value: 'difyBot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions of Flowise
			name: 'Flowise',
			action: 'Flowise',
			description: 'Controls integration with Flowise',
			value: 'flowiseBot',
		},
	],
	// Setting the default option to "Send Text"
	default: 'chatwoot',
};
