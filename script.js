const tree = document.getElementById("tree");
const family = {};

function addMember() {
  const name = document.getElementById("name").value.trim();
  const relation = document.getElementById("relation").value;
  const parent = document.getElementById("parent").value.trim();

  if (!name) {
    alert("Please enter a name");
    return;
  }

  family[name] = { relation, parent };

  renderTree();

  document.getElementById("name").value = "";
  document.getElementById("parent").value = "";
}

function renderTree() {
  tree.innerHTML = "";

  Object.keys(family).forEach(person => {
    const div = document.createElement("div");
    div.className = `member ${family[person].relation}`;

    div.innerHTML = `
      <strong>${person}</strong>
      <div class="relation">${formatRelation(family[person])}</div>
    `;

    tree.appendChild(div);
  });
}

function formatRelation(member) {
  if (!member.parent) return member.relation;

  if (member.relation === "step")
    return `Step parent of ${member.parent}`;

  if (member.relation === "adopted")
    return `Adopted parent of ${member.parent}`;

  if (member.relation === "biological")
    return `Biological parent of ${member.parent}`;

  return `Child of ${member.parent}`;
}
