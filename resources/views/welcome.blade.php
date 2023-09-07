<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>CKEditor 5 - Classic editor</title>
    <script src="https://cdn.ckeditor.com/ckeditor5/38.1.1/classic/ckeditor.js"></script>
</head>
<body>
    <h1>Classic editor</h1>
    <form action="[URL]" method="post">
        <textarea name="content" id="editor">
            &lt;p&gt;This is some sample content.&lt;/p&gt;
        </textarea>
        <p><input type="submit" value="Submit"></p>
    </form>

    <iframe src='https://view.officeapps.live.com/op/embed.aspx?src=http://remote.url.tld/path/to/document.doc' width='1366px' height='623px' frameborder='0'>This is an embedded <a target='_blank' href='http://office.com'>Microsoft Office</a> document, powered by <a target='_blank' href='http://office.com/webapps'>Office Online</a>.</iframe>
    <script>
        ClassicEditor
            .create( document.querySelector( '#editor' ) )
            .catch( error => {
                console.error( error );
            } );
    </script>
</body>
</html>
