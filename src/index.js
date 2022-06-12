

const onClickAdd = () => {
  // テキストの取得とinputタグの初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから要素を削除する
const deleteTarget = (target) => {
  document.getElementById('incomplete-list').removeChild(target);
}

//未完了リストを追加する
const createIncompleteList = (text) => {
  //divタグの生成
  const div = document.createElement('div');
  div.className = "list-row"

  //liタグの生成
  const li  = document.createElement('li');
  li.innerText = text;

  //button(完了)タグの生成
  const completeButton = document.createElement('button');
  completeButton.innerText = "完了"
  completeButton.addEventListener("click", () => {
    //完了ボタンクリック時に完了エリアから要素を削除
    deleteTarget(completeButton.parentNode)
    //divタグの初期化
    const addTarget = completeButton.parentNode;
    addTarget.textContent = null;

    //liタグの生成
    const li  = document.createElement('li');
    li.innerText = text;

    //buttonタグの生成
    const backButton = document.createElement('button');
    backButton.innerText = "戻す"
    backButton.addEventListener('click', () => {
      const deleteTarget = backButton.parentNode
      document.getElementById('complete-list').removeChild(deleteTarget);

      const text = deleteTarget.firstElementChild.innerText
      createIncompleteList(text);
    })

    //divタグの各親要素を設定
    addTarget.append(li);
    addTarget.append(backButton);

    //完了リストに表示
    document.getElementById('complete-list').append(addTarget);
  })

  //button(削除)タグの生成
  const deleteButton = document.createElement('button');
  deleteButton.innerText = "削除"
  deleteButton.addEventListener('click', () => {
    //削除ボタンをクリックしたときに親タグのdivをulタグから削除
    deleteTarget(deleteButton.parentNode);
  })

  //divタグの小要素の設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //ulタグにdivタグを挿入
  document.getElementById("incomplete-list").append(div);
}


document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());