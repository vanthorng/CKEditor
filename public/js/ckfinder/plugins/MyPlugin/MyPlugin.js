CKFinder.define( [ 'marionette' ], function( Marionette ) {
	'use strict';

	/**
	 * Plugin that stores and edits Doc_code.
	 */
	var DocCodePlugin = {
		/**
		 * Initializes the plugin.
		 *
		 * @param {CKFinder} finder The CKFinder instance.
		 */
		init: function( finder ) {
			finder.on( 'contextMenu:file:view', function( evt ) {
				evt.data.items.add( {
					label: 'Showing',
					isActive: evt.data.context.file.get( 'folder' ).get( 'acl' ).fileView,
					icon: 'ckf-view',
					action: function() {
						var url = 'https://view.officeapps.live.com/op/view.aspx?src=' + encodeURIComponent(evt.data.context.file.getUrl());
						console.log(url)
						// this.element.innerHTML = '<iframe src="' + url + '" width="100%" height="500"></iframe>';
						// this.element.className = 'ckfinder-plugin-office-preview';
						// document.body.appendChild(this.element);
					}
					// function() {
					// 	alert( evt.data.context.file.getUrl() );
					// }
				},
				// OfficePreview class
				function OfficePreview(file) {
					this.file = file;
					this.element = document.createElement('div');
				} );
			} );
			
			// Store the Doc_code for each file when the list of files is loaded.
			finder.on( 'listView:files:loaded', this.onFilesLoaded );

			// Update the file's Doc_code when the file is edited.
			finder.on( 'listView:file:edit', this.onFileEdit );

		
		},

		/**
		 * Stores the Doc_code for each file in the list.
		 *
		 * @param {Object} evt The event object.
		 */
		onFilesLoaded: function( evt ) {
			evt.data.files.forEach( this.onFileLoaded );
		},

		/**
		 * Stores the Doc_code for a file.
		 *
		 * @param {Object} file The file object.
		 */
		onFileLoaded: function( file ) {
			file.docCode = this.getDocCode( file.name );
		},

		/**
		 * Updates the file's Doc_code when the file is edited.
		 *
		 * @param {Object} evt The event object.
		 */
		onFileEdit: function( evt ) {
			// Get the value of the doc_code field from the file edit form.
			var docCode = evt.data.form.getFieldValue( 'doc_code' );

			// Set the file's Doc_code to the value of the doc_code field.
			evt.data.file.docCode = docCode;
		},

		/**
		 * Generates a random Doc_code for a file.
		 *
		 * @param {string} name The file name.
		 *
		 * @return {string} The Doc_code.
		 */
		getDocCode: function( name ) {
			var extension = name.substr( name.lastIndexOf( '.' ) + 1 ).toLowerCase();
			var docCode = '';

			if ( /(jpg|jpeg|gif|png)/.test( extension ) ) {
				docCode = 'IMG-' + Math.random().toString( 36 ).substring( 7 );
			}

			if ( /(doc|docx|pdf)/.test( extension ) ) {
				docCode = 'DOC-' + Math.random().toString( 36 ).substring( 7 );
			}

			return docCode;
		},
	
	};


	


	return DocCodePlugin;
} );
