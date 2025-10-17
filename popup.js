document.querySelectorAll('.order-row').forEach(row => {
    row.addEventListener('click', function () {
        document.getElementById('sidebar-popup').classList.add('active');
        // Example: set content dynamically
        document.getElementById('sidebar-content').innerHTML = `
      <h2 style="display: flex; justify-content: space-between; margin-top:10px;">${row.cells[1].textContent}
            <div style=" gap:16px; align-items:center; margin-bottom:16px;">
            <button style="background:#f8f8fa; border:none; border-radius:4px; padding:6px 16px; cursor:pointer; margin-right:8px;">Edit</button>
            <button style="background:#f8f8fa; border:none; border-radius:4px; padding:6px 10px; cursor:pointer; margin-right:8px;">🖨️</button>
            <button style="background:#f8f8fa; border:none; border-radius:4px; padding:6px 10px; cursor:pointer;">🗑️</button>
        </div>
      </h2>
      <div style="display:flex; gap:32px; border-bottom:1px solid #e0e0e0; margin-bottom:16px;">
        <div style="padding-bottom:8px; border-bottom:2px solid #19b091; font-weight:bold; color:#19b091;">Order info</div>
        <div style="padding-bottom:8px; color:#888;">Route info</div>
      </div>
      <div style="background:#fafbfc; border-radius:12px; padding:20px; margin-bottom:24px;">
        <div style="color:#888; font-size:13px; margin-bottom:16px;">Product details</div>
        <div style="display:flex; gap:32px; margin-bottom:24px;">
          <div style="flex:1;">
            <div style="font-size:13px; color:#888;">Display name</div>
            <div style="font-weight:bold;">Warm</div>
            <div style="font-size:13px; color:#888;">Material</div>
            <div>Acacia, velour, brass</div>
            <div style="font-size:13px; color:#888;">Color</div>
            <div>🟤</div>
            <div style="font-size:13px; color:#888;">Stock</div>
            <div>France, Paris, stock #11</div>
          </div>
          <div style="flex:1;">
            <div style="font-size:13px; color:#888;">Item ID</div>
            <div>dA27sC55</div>
            <div style="font-size:13px; color:#888;">Dimensions</div>
            <div>H 1050 mm, W 870 mm, D 990 mm</div>
            <div style="font-size:13px; color:#888;">Quantity</div>
            <div>1</div>
            <div style="font-size:13px; color:#888;">Price</div>
            <div>$412,00</div>
          </div>
        </div>
    `;
    });
});

document.getElementById('close-sidebar').addEventListener('click', function (e) {
    document.getElementById('sidebar-popup').classList.remove('active');
    e.stopPropagation();
});