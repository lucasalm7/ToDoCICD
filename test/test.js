import { Selector } from 'testcafe';
fixture('Pressing enter key should add a new todo item')
    .page('https://todo3.setgo.dk/#/');
    
    test('Input value can be added with enter key', async t => {
        // Arange
        const input = Selector('.new-todo');
        const todos = Selector('.todo-list li');
        const initialCount = await todos.count;

		
        //Act
        await t
            .typeText(input, 'This is the second test')
            .pressKey('enter');

        //Assert
        await t.expect(todos.count).eql(initialCount + 1);
    }
);