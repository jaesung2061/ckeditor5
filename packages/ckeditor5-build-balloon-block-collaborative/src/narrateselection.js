import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
// import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';
import imageIcon from '@fortawesome/fontawesome-pro/svgs/solid/microphone-alt.svg'
import {addListToDropdown, createDropdown} from '@ckeditor/ckeditor5-ui/src/dropdown/utils'
import Model from '@ckeditor/ckeditor5-ui/src/model'
import Collection from '@ckeditor/ckeditor5-utils/src/collection'

export default class Narrateselection extends Plugin {
	init() {
		let editor = this.editor

		editor.ui.componentFactory.add('narrateSelection', (locale) => {
			let dropdown = createDropdown(locale)

			dropdown.buttonView.set({
				label: 'Narrate Selection',
				icon: imageIcon,
				tooltip: true,
			})

			let items = new Collection()

			window.vm.$store.state.voices.forEach((voice) => {
				items.add({
					type: 'button',
					model: new Model({
						withText: true,
						label: voice.Id,
					}),
				})
			})

			addListToDropdown(dropdown, items)

			dropdown.on('execute', (event) => {
				console.log(event)
				// console.log(this.editor.getSelection())

				let editor = this.editor
				let selection = editor.model.document.selection
				let range = selection.getFirstRange()

				let text = ''

				for (let item of range.getItems()) {
					if (item.data) {
						text += item.data + '\n\n'
					}
				}

				if (! window.vm.availableFeatures.canUseSelectedTextNarration) {
					return window.Bus.$emit('notify', 'Targeted narration is a Hobbyist tier feature.')
				}

				window.vm.narrateText(text, event.source.label) // label is voice ID
			})

			return dropdown
		})
	}
}
