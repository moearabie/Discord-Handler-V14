```php
$Input = new HTMLInputField([
     'className' => 'Input',
     'ElementID' => 'HtmlInput'
]);

$TextInput = new HTMLTextInput([
     'extend' => $Input
]);

$TextInput::createElement('div');

