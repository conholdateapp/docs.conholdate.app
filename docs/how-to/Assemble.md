---
id: assemble-documents-online-free
title: Assembly Documents
sidebar_label: Assemble Documents
---

Generate assembly questionaries automaticaly from a template. Share and fill assembly form to generate reports online for free.  
All assembly templates can be filled online with our online assembly application by document owners or by sharing documents with registered and guest users.

## How to prepare assembly template
1. Open your document and put tag where you need dynamic data. A tag must meet the following requirements:
	- A tag keyword must be surrounded by `<<[` and `]>>` character sequences.
	- Keyword placed between `<<[` and `]>>` can be any word you need - this word also should be used in the **id** field of the template xml file (xml template will be described bellow).
	- Tag example: `<<[userName]>>`
1. Create template xml file Please make sure that its name is **equale** to the template name. For example if your template name is **my template.docx** than your xml file name shoud be **my template.xml**

## How to configure template xml
1. Create root element named **form**
1. Inside **form** create **section** element. This element describes assembly form step i.e number of the **section** elements is equale to the number of steps in the generated assembly form.
1. Inside **section** create at least one **question** element. You can add quetion elements as many as you need. Number of the question elements is equale to the number of questions at specific step in the generated assembly form.
1. Each **question** element must containe such required properties:
	- type
	- id
	- title
	- description
1. Zip both files (template document and its xml configuration file)
> Please pay attention that the **id** value should be the same as **keyword** used in the template document. For example if you have such filed `<<[userName]>>` the **id** must be **userName**. Also you can download template example [here](/downloadTemplate)

### Supported field types
- input
- textarea
- dropdown
- checkbox
- radio button
- date picker

### How to configure input field
1. Set **type** to **input**
1. Set its **title**
1. Set its **description**
1. Set its **id**
1. Also you can configure if this filed will be **required** or **optional** by using **required** property. By default it's **false**

### How to configure textarea field
1. Set **type** to **textarea**
1. Set its **title**
1. Set its **description**
1. Set its **id**
1. Also you can configure if this filed will be **required** or **optional** by using **required** property. By default it's **false**

### How to configure dropdown field
1. Set **type** to **textarea**
1. Set its **title**
1. Set its **description**
1. Set its **id**
1. Add **options** element
1. Inside **options** element add option element by using **option**. You can add as many **option** items as you need. Each option will be transfered into the dropdown element.
1. Also you can configure if this filed will be **required** or **optional** by using **required** property. By default it's **false**

### How to configure checkbox field
1. Set **type** to **checkbox**
1. Set its **title**
1. Set its **description**
1. Set its **id**
1. Add **options** element
1. Inside **options** element add option element by using **option**. You can add as many **option** items as you need. Each option will be transfered into the checkbox element.
1. Also you can configure if this filed will be **required** or **optional** by using **required** property. By default it's **false**

### How to configure checkbox field
1. Set **type** to **radio**
1. Set its **title**
1. Set its **description**
1. Set its **id**
1. Add **options** element
1. Inside **options** element add option element by using **option**. You can add as many **option** items as you need. Each option will be transfered into the radio button element.
1. Also you can configure if this filed will be **required** or **optional** by using **required** property. By default it's **false**

### How to configure date picker field
1. Set **type** to **date**
1. Set its **title**
1. Set its **description**
1. Set its **id**
1. Also you can configure if this filed will be **required** or **optional** by using **required** property. By default it's **false**

### How to configure additional template settings
1. You can configure such options: **allow or not resulted document downloading and email addresses to which the assembled document will be sent**
1. Add **settings** element inside **items** element
1. To enable/disable downloading inside **settings** element add **allowDownload** option which is **false** by default.
1. To configure **emails** add **email** element inside **settings** element.
	- To **on** or **off** emails sending add **active** element with **true** or **false** value.
	- To configure emails adresses add **address** element with emails separated by the **comma**
	
### Assemble documents online without registration
1. Go to [Online Document Assembly](https://features.conholdate.app/assembly) page.
1. Click on `Upload` icon and upload a zip package. It will be unziped and assembly template generated automatically.
1. After upload is complete, click on `Assembly` button.
1. Also you can click on <i class="far fa-copy"></i> button to copy your assembly link and share it with anyone you need
1. If download resulted document is enabled you can select one of the three available formats from dropdown and download it.

### Assemble documents online as registered user
Registered users can assemble template(s) right from dashboard.
1. [Login](https://conholdate.app/signin) to your account or [register](https://conholdate.app/signin) if you do not own one yet. It's FREE!
1. Go to your [dashboard](https://dashboard.conholdate.app).
1. Click on `Upload` button and upload a zip package. It will be unziped and assembly template generated automatically.
1. Wait until uploading and processing is complete, then click on <i class="fas fa-ellipsis-v"></i> icon and select `Assembly`.
1. Fill required fields.
1. When you are done, click on **Finish** button to save your assembly permanently.
1. If download resulted document is enabled you can select one of the three available formats from dropdown and download it.

### Assemble and collaborate online
> **Only** available to registered users.

Share assembly with others to collaborate by filling questionnaire.
1. [Login](https://conholdate.app/signin) to your account or [register](https://conholdate.app/signin) if you do not own one yet. It's FREE!
1. Go to your [dashboard](https://dashboard.conholdate.app).
1. Click on `Upload` button and upload a zip package. It will be unziped and assembly template generated automatically.
1. Wait until uploading and processing is complete, then click on <i class="fas fa-link"></i> icon.
> No registration is required for questionnaire filling from shared link.

## Responsive design
View your documents on any mobile or desktop devices from anywhere! [Conholdate.app](https://conholdte.app) provides a responsive layout.

## Cross-browser support
All major browsers such as Safari, Chrome, Firefox, Opera and Edge are supported out of the box.

## Supported formats
Currently our free online document assembly supports only **DOC** and **DOCX** templates. But we work on new formats adding.