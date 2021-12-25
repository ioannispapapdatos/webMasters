var shopcart = [];
$(document).ready(function () {
  outputCart();
  $(".productItem").click(function (e) {
    e.preventDefault();
    var iteminfo = $(this.dataset)[0];
    iteminfo.qty = 1;
    var itemincart = false;
    $.each(shopcart, function (index, value) {
      //console.log(index + '  ' + value.id);
      if (value.id == iteminfo.id) {
        value.qty = parseInt(value.qty) + parseInt(iteminfo.qty);
        itemincart = true;
      }
    });
    if (!itemincart) {
      shopcart.push(iteminfo);
    }
    sessionStorage["sca"] = JSON.stringify(shopcart);
    outputCart();
    ///
  });

  // in part will show bck when the cllind buy somethig from the shopping cart

  function outputCart() {
    if (sessionStorage["sca"] != null) {
      shopcart = JSON.parse(sessionStorage["sca"].toString());
      $("#checkoutdiv").show();
    }

    var holderHTML = "";
    var total = 0;
    var itemCnt = 0;

    $.each(shopcart, function (index, value) {
      var stotal = value.qty * value.price;
      total += stotal;
      itemCnt += parseInt(value.qty);
      holderHTML +=
        "<tr><td>" +
        value.qty +
        "</td><td>#" +
        value.id +
        " " +
        value.name +
        "(" +
        value.s +
        ")</td><td> " +
        formatMoney(value.price) +
        ' </td><td class="text-xs-right"> ' +
        formatMoney(stotal) +
        "</td></tr>";
    });
    holderHTML +=
      '<tr><td colspan="3" class="text-xs-right">Total</td><td class="text-xs-right">' +
      formatMoney(total) +
      "</td></tr>";

    $("#output").html(holderHTML);
    $(".total").html(formatMoney(total));
    $(".items").html(itemCnt);
  }

  function formatMoney(n) {
    return "$" + (n / 100).toFixed(2);
  }
});

// .....
var shopcart = [];
$(document).ready(function () {
  outputCart();
  $("#output").on("change", ".dynqua", function () {
    var iteminfo = $(this.dataset)[0];
    var itemincart = false;
    var removeItem = false;
    var removeIndex = 0;
    var qty = $(this).val();
    if (qty <= 0) {
      qty = 0;
      $(this).val(0);
    }
    $.each(shopcart, function (index, value) {
      if (value.id == iteminfo.id) {
        if (qty <= 0) {
          removeItem = true;
          removeIndex = index;
        } else {
          shopcart[index].qty = qty;
          itemincart = true;
        }
      }
    });
    if (removeItem) {
      shopcart.splice(removeIndex, 1);
    }
    sessionStorage["sca"] = JSON.stringify(shopcart);
    outputCart();
  });

  function outputCart() {
    if (sessionStorage["sca"] != null) {
      shopcart = JSON.parse(sessionStorage["sca"].toString());
    }
    console.log(sessionStorage["sca"]);
    console.log(shopcart);
    var holderHTML = "";
    var total = 0;
    var itemCnt = 0;
    $.each(shopcart, function (index, value) {
      var stotal = value.qty * value.price;
      var a = index + 1;
      total += stotal;
      itemCnt += parseInt(value.qty);
      holderHTML +=
        '<tr><td><input size="5"  type="number" class="dynqua" name="quantity_' +
        a +
        '" value="' +
        value.qty +
        '" data-id="' +
        value.id +
        '"></td><td><input type="hidden" name="item_name_' +
        a +
        '" value="' +
        value.name +
        " " +
        value.s +
        '">' +
        value.name +
        "(" +
        value.s +
        ')</td><td><input type="hidden" name="amount_' +
        a +
        '" value="' +
        formatMoney(value.price) +
        '"> $' +
        formatMoney(value.price) +
        ' </td><td class="text-xs-right"> ' +
        formatMoney(stotal) +
        '</td><td><span class="remove-item btn btn-danger">x</span></td></tr>';
    });
    holderHTML +=
      '<tr><td colspan="3" class="text-xs-right">Total</td><td class="text-xs-right">$' +
      formatMoney(total) +
      "</td></tr>";
    $("#output").html(holderHTML);
  }
  $("#output").on("click", ".remove-item", function () {
    var itemInfo = $(this.dataset)[0];
    var itemToDelete = $(".remove-item").index(this);
    shopcart.splice(itemToDelete, 1);
    sessionStorage["sca"] = JSON.stringify(shopcart);
    outputCart();
  });

  function formatMoney(n) {
    return (n / 100).toFixed(2);
  }
});
