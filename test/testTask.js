const chai = require('chai');
const assert = chai.assert;
const Task = require('../lib/task.js');


describe('Title', ()=>{
  describe('editTodoItem', ()=>{
    it('should edit the item', ()=>{
      let task = new Task('purchage a earphone', 1);
      task.editTodoItem('purchage a wrist watch');
      assert.equal(task.getTodoItem(), 'purchage a wrist watch');
    })
  })
  describe('editStatus', ()=>{
    it('should edit status true if item has completed', ()=>{
      let task = new Task('purchage a earphone', 1);
      task.editStatus(true);
      let expected = {todoItem:'purchage a earphone', id:1, status:true};
      let actual = task;
      assert.deepEqual(actual, expected);
    })
    it('should edit status false if item has completed', ()=>{
      let task = new Task('purchage a earphone', 1);
      task.editStatus(false);
      let expected = {todoItem:'purchage a earphone', id:1, status:false};
      let actual = task;
      assert.deepEqual(actual, expected);
    })
  })
  describe('getStatus', ()=>{
    it('should give the true status if status has true', ()=>{
      let task = new Task('todo');
      task.editStatus(true);
      assert.equal(task.getStatus(), true);
    })
    it('should give the false status if status has false', ()=>{
      let task = new Task('todo');
      task.editStatus(false);
      assert.equal(task.getStatus(), false);
    })
    it('bydefault should give the false status', ()=>{
      let task = new Task('todo');
      task.editStatus(false);
      assert.equal(task.getStatus(), false);
    })
  })
  describe('getTodoItem', ()=>{
    it('should give the todoItem', ()=>{
      let task = new Task('purchage a earphone', 1);
      assert.equal(task.getTodoItem(), 'purchage a earphone');
      task.editTodoItem('purchage a wrist watch');
      assert.equal(task.getTodoItem(), 'purchage a wrist watch');
    })
  })
})
