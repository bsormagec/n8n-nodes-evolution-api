import { INodeProperties } from 'n8n-workflow';

// Options for messages-api (Messages)
export const messagesOperationsOptions: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['messages-api'], // Value of Resource
		},
	},
	options: [
		// Option = Send Text Message
		{
			// Send Text
			name: 'Send Text',
			action: 'Send text',
			description: 'Send a text message',
			value: 'send-text',
		},

		// Option = Send Image
		{
			// Send Media
			name: 'Send Image',
			action: 'Send image',
			description: 'Send an image message',
			value: 'send-image',
		},

		// Option = Send Video
		{
			// Send Media
			name: 'Send Video',
			action: 'Send video',
			description: 'Send a video message',
			value: 'send-video',
		},

		// Option = Send Audio
		{
			// Send Narrated Audio
			name: 'Send Audio',
			action: 'Send audio',
			description: 'Send an audio message',
			value: 'send-audio',
		},

		// Option = Send Document
		{
			// Send Media
			name: 'Send Document',
			action: 'Send document',
			description: 'Send a document message',
			value: 'send-document',
		},

		// Option = Send Poll
		{
			// Send Poll
			name: 'Send Poll',
			action: 'Send poll',
			description: 'Send a poll with up to 12 options',
			value: 'send-poll',
		},

		// Option = Send Contact
		{
			name: 'Send Contact',
			action: 'Send contact',
			description: 'Send a contact on WhatsApp',
			value: 'send-contact',
		},

		// Option = Send List
		{
			name: 'Send List',
			action: 'Send list',
			description: 'Send an interactive list of options',
			value: 'send-list',
		},

		// Option = Send Buttons
		{
			name: 'Send Buttons',
			action: 'Send buttons',
			description: 'Send a message with interactive buttons',
			value: 'send-buttons',
		},

		// Option = Send PIX
		{
			name: 'Send PIX',
			action: 'Send PIX',
			description: 'Send a PIX payment button',
			value: 'send-pix',
		},

		// Option = Send Status
		{
			name: 'Send Status',
			action: 'Send status',
			description: 'Publish a Status/Stories',
			value: 'send-stories',
		},

		// Option = React to Message
		{
			name: 'React to Message',
			action: 'React to message',
			description: 'Add a reaction to a message',
			value: 'send-reaction',
		},
	],
	// Setting the default option to "Send Text"
	default: 'send-text',
};
