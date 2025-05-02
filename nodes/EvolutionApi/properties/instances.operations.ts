import { INodeProperties } from 'n8n-workflow';

// Options for instances-api (Instances)
export const instancesOperationsOptions: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['instances-api'], // Value of Resource
		},
	},

	// Options that will be linked to the Operation "Instance"
	options: [
		// Option = Create instance
		{
			// Create Instance Basic
			name: 'Create Instance',
			action: 'Create instance',
			description: 'Creates a new Instance',
			value: 'instance-basic',
		},

		// Option = Connect Instance
		{
			// Instance Connect
			name: 'Connect Instance',
			action: 'Connect instance',
			description: 'Generates the connection of an Instance (QR or Base64)',
			value: 'instance-connect',
		},

		// Option = Fetch Instance
		{
			// Fetch Instances
			name: 'Fetch Instance',
			action: 'Fetch instance',
			description: 'Fetches and lists the created Instances',
			value: 'fetch-instances',
		},

		// Option = Define Instance Behavior
		{
			name: 'Define Behavior',
			action: 'Define behavior',
			description: 'Defines the behavior of the instance',
			value: 'instance-settings',
		},

		// Option = Set Presence
		{
			// Set Presence
			name: 'Set Presence',
			action: 'Set presence',
			description: 'Sets the presence in the instance',
			value: 'set-presence',
		},

		// Option = Set Proxy
		{
			// Set/find Proxy
			name: 'Set/Find Proxy',
			action: 'Proxy',
			description: 'Sets a Proxy in the instance',
			value: 'set-proxy',
		},

		// Option = Restart instance
		{
			// Restart Instance
			name: 'Restart Instance',
			action: 'Restart instance',
			description: 'Restarts the Instance socket',
			value: 'restart-instance',
		},

		// Option = Logout instance
		{
			// Logout Instance
			name: 'Logout Instance',
			action: 'Logout instance',
			description: 'Disconnects WhatsApp from the Instance',
			value: 'logout-instance',
		},

		// Option = Delete instance
		{
			// Delete Instance
			name: 'Delete Instance',
			action: 'Delete instance',
			description: 'Deletes an Instance',
			value: 'delete-instance',
		},
	],
	// Setting the default option to "Create Instance"
	default: 'instance-basic',
};
