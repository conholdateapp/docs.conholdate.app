---
id: assemble-forms-online-free
title: Build Forms Online
menu:
  conholdate:
    name: "Build Forms"   
---

Assemble your own forms and document wizards online made easy with our document assembly engine.

## What is Forms
Forms is a web-based app used to generate documents using a pre-defined templates in a wizard a-like step-by-step form.
Imagine that you have two similar documents with few minor differences, with Forms you can keep only one document as template and generate desired output anytime you want.
The result from filling up the form can be obtained as PDF, DOC and DOCX (more formats coming soon) or emailed to preset email addresses.

## How to create Forms
In order to create your own Form you can use our builtin form builder UI service or by uploading already created template which is consist of two files: **docx** and **xml** with equal names.
For example: `my_form.docx` and `my_form.xml`
{{< alert style="warning" >}}  Download our [form](https://products.conholdate.app/download/example-forms.zip) example for the further reference.{{< /alert>}}

## How to create Form from Forms builder UI service
To create a form using our builtin Forms builder please navigate to this [link](https://products.conholdate.app/assembly/new) and follow next steps:

### Create form section
1. In the top input enter form name.
1. Click on `pen` icon to edit section tag. This tag is used in the .docx document in the place where you need to enter a user answer.
1. If this section is required for filling check `required` checkbox.
1. Enter section title.
1. Enter section description if needed. 
1. Enter a question. Also you can leave this field empty.
1. Select one of the supported section types from the dropdown list.
	> Paragraph
	> Short answer
	> Date
	> Dropdown
	> Multiple choice
	> Radio
1. If you have several sections on the same step you can change theirs order by using `Move Up` and `Move Down` buttons.
1. To delete step you cab use `Remove` button.
{{< alert style="warning" >}}  To add multiple sections for one step please click on `Add section` button. This button is placed on the right side pannel.{{< /alert>}}

### Manipulate form steps
1. To add a new step please click on `Add step` button. This button is placed on the right side panel.
1. To remove step click on `Remove` button.
1. To navigate between form's steps you can use `Back` and `Next` buttons placed on the bottom of the Forms builder UI.
1. The `Preview` button will show you your form as it will look like.

### Configure form settings
1. To customize form settings click on `Edit settings button`. Here you can configure next:
	> Allow / disallow downloading.
	> Set download format.
	> Enable / disable email results.
	> Set email address where to send results.
	> Set file format in which results will be attached to the email.
	
### Add form document
1. To add a document please click on `Go to Editor` button.
1. Here you can upload existed **.docx** document or create a new one.
1. Put section tags from a right side panel to the document content where you need to put their data.
1. Click on `save` button to save the form.

{{< alert style="warning" >}}After form is saved you will be able to download your form if you are not registered user. If you are a registered user you will be able to see your form in the `My Forms` section of your dashboard.{{< /alert>}}

## How to create form manually

### DOCX template
DOCX template is your main template which holds static data/text along with dynamic data/variables.
1. Open existing or create new DOCX file;
1. Now type any `TAG` (a.k.a. `ID`) where you want to submit dynamic data.
	> `TAG` must be unique in order to work correctly  
	> TAG Example: `<<[myTag]>>`

### XML template
XML template structure is simple and divided by `sections` inside root element `form`. Each `section` represents form/wizard step.
1. Create new XML file;
1. Add root element `<form></form>`;
1. Inside `<form>` add `<step></step>`;
1. Now we can add `<section></section>`. Each `step` can have as many `sections` as you like.
1. Each `<section>` must have:
	- type
	- id
	- title
	- description
	- question
	Where `id` = `tag` name from DOCX file.

See following XML example:
```xml
<form>
	<step>
		<section>
			<type>input</type>
			<id>myTag</id>
			<title>My title</title>
			<question>My question?</question>
			<description>Input description, question, etc</description>
		</section>
		<section>
			<type>textarea</type>
			<id>myAnotherTag</id>
			<title>Another title</title>
			<question>My another question?</question>
			<description>textarea description, question, etc</description>
		</section>
	</step>
	<step>
		<section>
			<type>dropdown</type>
			<id>myDropdownTag</id>
			<title>One more title</title>
			<description>dropdown description, question, etc</description>
			<required>true</required>
			<question>One more question?</question>
			<options>
                <option>
					<title>{option_title}</title>
					<value>{option_value}</value>
				</option>
                <option>
					<title>{option_title}</title>
					<value>{option_value}</value>
				</option>           
            </options>
		</section>
	</step>
</form>
```
This example has 2 steps, where first step has 2 questions with text input and text area and second step has one question with dropdown menu.

### Supported question types
- input (text input field)
- textarea (text area)
- dropdown (dropdown)
- checkbox (checkbox)
- radio (radio button)
- date (date picker)

### Advanced settings
With advanced option you can specify required or optional questions, allow/disallow downloads and sent resulted documents to provided email addresses.
- To set any question as required just add `<required>true</required>` parameter to `<section></section>` property. Setting to **false** means that question is optional.
	By default it is set as **true** - required.
- Allowing/disallowing downloads and sending resulted documents can be achieved by added `<settings>` property inside root element `<form>`, in the same way as you did for `<section>`.
	Example:
```xml
	<form>		
		<settings>
			<download>
				<enable>true</enable>
				<downloadAs>PDF, DOCX</downloadAs>
			</download>
			<email>
				<enable>true</enable>
				<emailTo>test@email.com, test@secondemail.com</emailTo>
				<emailAs>DOCX</emailAs>
			</email>
		</settings>	
	</form>
```

### Assemble template
Now that you have both DOCX and XML templates it is time to assemble your form.
In order to assemble your final template, just zip both files into single zip.
	
### Create forms online without registration
1. Go to [Online Document Assembly](https://products.conholdate.app/assembly) page.
1. Click on `Upload` icon and upload a zip package.
1. After upload is complete, click on the `Assembly` button.
1. To share your form click on the <i class="far fa-copy"></i> button. Share form link will be copied to your clipboard.
1. If download resulted document is enabled you can select one of the three available formats from dropdown and download it.

### Create forms online as registered user
Registered users can assemble template(s) right from dashboard.
1. [Login](https://conholdate.app/signin) to your account or [register](https://conholdate.app/signin) if you do not own one yet. It's FREE!
1. Go to your [dashboard](https://dashboard.conholdate.app).
1. Go to `My Forms` section.
1. Click on the `Upload` button and upload a zip package.
1. Wait until uploading and processing is complete, then click on <i class="fas fa-ellipsis-v"></i> icon and select `Assembly`.
1. Complete form by going through all steps.
1. Click on the **Finish** button to generate document with parameters you inserted during wizard steps.
1. If download resulted document is enabled you can select one of the three available formats from dropdown and download it.

### Responsive design
View your documents on any mobile or desktop devices from anywhere! [Conholdate.app](https://conholdte.app) provides a responsive layout.

### Cross-browser support
All major browsers such as Safari, Chrome, Firefox, Opera and Edge are supported out of the box.

### Supported formats
Currently our free online document assembly supports only **DOC** and **DOCX** templates. But we are working on adding new formats.
