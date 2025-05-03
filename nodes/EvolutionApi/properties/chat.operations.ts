import { INodeProperties } from 'n8n-workflow';

export const chatOperations: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['chat-api'],
		},
	},
	options: [
		{
			name: 'Check Number',
			action: 'Check number on whats app',
			description: 'Checks if a number is registered on WhatsApp',
			value: 'check-number',
		},
		{
			name: 'Read Messages',
			action: 'Mark messages as read',
			description: 'Marks specific messages as read',
			value: 'read-messages',
		},
		{
			name: 'Manage Archive',
			action: 'Manage conversation archive',
			description: 'Archives or unarchives a conversation',
			value: 'manage-archive',
		},
		{
			name: 'Mark as Unread',
			action: 'Mark conversation as unread',
			description: 'Marks a specific conversation as unread',
			value: 'mark-unread',
		},
		{
			name: 'Delete Message',
			action: 'Delete message',
			description: 'Deletes a specific message for everyone',
			value: 'delete-message',
		},
		{
			name: 'Fetch Profile Picture',
			action: 'Fetch profile picture',
			description: 'Gets the URL of a contact\'s profile picture',
			value: 'fetch-profile-picture',
		},
		{
			name: 'Get Media in Base64',
			action: 'Get media in base64',
			description: 'Gets the content of a media in Base64 format',
			value: 'get-media-base64',
		},
		{
			name: 'Edit Message',
			action: 'Edit message',
			description: 'Edits a previously sent message',
			value: 'update-message',
		},
		{
			name: 'Send Presence',
			action: 'Send presence',
			description: 'Sends the presence status (typing/recording) to a contact',
			value: 'send-presence',
		},
		{
			name: 'Block Contact',
			action: 'Block contact',
			description: 'Blocks or unblocks a contact',
			value: 'block-contact',
		},
		{
			name: 'List Contacts',
			action: 'List contacts',
			description: 'Lists all contacts or searches for a specific contact',
			value: 'find-contacts',
		},
		{
			name: 'Find Messages',
			action: 'Find messages from a contact',
			description: 'Searches for messages from a specific contact',
			value: 'find-messages',
		},
		{
			name: 'Find Status',
			action: 'Find message status',
			description: 'Searches for message status from a specific contact',
			value: 'find-status-messages',
		},
		{
			name: 'Find Chats',
			action: 'Find chats',
			description: 'Searches for chats from a specific contact',
			value: 'find-chats',
		},
	],
	default: 'check-number',
};
