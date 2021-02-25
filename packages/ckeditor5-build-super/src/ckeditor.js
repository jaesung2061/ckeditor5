/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import '../theme/theme.css'

// The editor creator to use.
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor'
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import RealTimeCollaborativeEditing from '@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativeediting'
import RealTimeCollaborativeComments from '@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativecomments'
import RealTimeCollaborativeTrackChanges from '@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativetrackchanges'
import Narrateselection from './narrateselection'
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter'
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat'
import BlockToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar'
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold'
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic'
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote'
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder'
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage'
import Heading from '@ckeditor/ckeditor5-heading/src/heading'
import Image from '@ckeditor/ckeditor5-image/src/image'
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption'
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle'
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar'
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload'
import Indent from '@ckeditor/ckeditor5-indent/src/indent'
import Link from '@ckeditor/ckeditor5-link/src/link'
import List from '@ckeditor/ckeditor5-list/src/list'
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed'
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph'
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice'
import Table from '@ckeditor/ckeditor5-table/src/table'
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar'
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation'
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline'
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough'
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript'
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript'
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor'
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor'
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat'
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment'
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline'

class CollaborativeSceneEditor extends BalloonEditorBase {}
class BasicSceneEditor extends BalloonEditorBase {}
class CollaborativeClassicEditor extends ClassicEditorBase {}
class BasicClassicEditor extends ClassicEditorBase {}

let basePlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	BlockToolbar,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	Underline,
	Strikethrough,
	Subscript,
	Superscript,
	FontColor,
	FontBackgroundColor,
	RemoveFormat,
	Narrateselection,
	Alignment,
	HorizontalLine
]

let collaborativePlugins = [
	RealTimeCollaborativeEditing,
	RealTimeCollaborativeComments,
	RealTimeCollaborativeTrackChanges,
]

CollaborativeSceneEditor.builtinPlugins = basePlugins.concat(collaborativePlugins)
CollaborativeClassicEditor.builtinPlugins = basePlugins.concat(collaborativePlugins)
BasicSceneEditor.builtinPlugins = basePlugins
BasicClassicEditor.builtinPlugins = basePlugins

const baseConfig = {
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative',
		],
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
		],
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en',
	placeholder: 'Content here...',
}
const blockToolbar = [
	'heading',
	'|',
	'bulletedList',
	'numberedList',
	'|',
	'indent',
	'outdent',
	'|',
	'blockQuote',
	'alignment',
	'|',
	'horizontalLine',
	'|',
	'undo',
	'redo',
]
const selectionToolbarItems = [
	'bold',
	'italic',
	'underline',
	'strikethrough',
	'subscript',
	'superscript',
	'|',
	'fontColor',
	'fontBackgroundColor',
	'|',
	'narrateSelection',
	'|',
	'removeFormat',
]


CollaborativeSceneEditor.defaultConfig = Object.assign({}, baseConfig, {
	blockToolbar: blockToolbar.concat(['|', 'comment', 'trackChanges']),
	toolbar: {
		items: selectionToolbarItems,
	}
})
CollaborativeClassicEditor.defaultConfig = Object.assign({}, baseConfig, {
	blockToolbar: blockToolbar.concat(['|', 'comment', 'trackChanges']),
	toolbar: {
		items: selectionToolbarItems,
	}
})
BasicSceneEditor.defaultConfig = Object.assign({}, baseConfig, {
	blockToolbar: blockToolbar.concat(['|', 'comment', 'trackChanges']),
	toolbar: {
		items: selectionToolbarItems,
	}
})
BasicClassicEditor.defaultConfig = Object.assign({}, baseConfig, {
	blockToolbar: blockToolbar.concat(['|', 'comment', 'trackChanges']),
	toolbar: {
		items: selectionToolbarItems,
	}
})

export default {
	CollaborativeSceneEditor,
	CollaborativeClassicEditor,
	BasicSceneEditor,
	BasicClassicEditor,
}
