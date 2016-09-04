
function createLineEditor(srcDiv, type, rcode, property, upk, uiType, uiClass) {
    var html = "";
    var value = $("#" + srcDiv).html();
    if (value != null) {
        value = value.trim();
    }
    html += "\n<div id=\"lineEditorFormFormDiv" + property + "\">";

    html += "\n<form id=\"lineEditorForm" + property +
            "\" action=\"rest/updateAttribute\" method=\"post\" onsubmit=\"javascript: return submitLineEditorForm('" +
            property + "');\">";

    html += "\n<input type=\"hidden\" name=\"type\" value=\"" + type + "\"></input>";
    html += "\n<input type=\"hidden\" name=\"rcode\" value=\"" + rcode + "\"></input>";
    html += "\n<input type=\"hidden\" name=\"property\" value=\"" + property + "\"></input>";
    html += "\n<input type=\"hidden\" name=\"upk\" value=\"" + upk + "\"></input>";

    html += "\n<div class=\"formTable\">";
    html += "\n<div class=\"formTableRow\">";

    html += "\n<div class=\"formTableCell border\">";
    if (uiType === "textfield" || uiType === "date" || uiType === "datetime") {
        html += "\n<input id=\"lineEditorFormInputField" + property +
                "\" type=\"text\" class=\"" + uiClass + "\" name=\"value\" value=\"" + value + "\"></input>";
    } else if (uiType === "textarea") {
        html += "\n<textarea id=\"lineEditorFormInputField" + property +
                "\" type=\"text\" class=\"" + uiClass + "\" name=\"value\">" + value + "</textarea>";
    }

    html += "\n</div>";

    html += "\n<div class=\"formTableCell border\" style=\"vertical-align: bottom;\">";
    //html += "\n<input type=\"submit\" value=\"Update\"></input>";
    html += "\n<img src='http://business300.com/public/bunnycrm.net/static/images/icons/save.png' alt='Save' title='Save' class='imageIcon24' onclick=\"javascript: return submitLineEditorForm('" +
            property + "');\">";
    html += "\n</div>";

    html += "\n<div class=\"formTableCell\">";
    html += "\n<div id=\"lineEditorForm" + property + "ResponseDiv\"></div>";
    html += "\n</div>";

    html += "\n</div>";
    html += "\n</div>";


    html += "\n</form>";
    html += "\n</div>"; // End form Div

    //Start display div
    html += "\n<div id=\"lineEditorFormDisplayDiv" + property + "\">";

    html += "\n<div class=\"formTable\">";
    html += "\n<div class=\"formTableRow\">";
    html += "\n<div class=\"formTableCell border\">";
    html += "\n<div id=\"lineEditorFormValueDisplayDiv" + property + "\" style=\"min-width: 220px;\" title=\"Double click to update\" ondblclick='javascript:showLineEditorFormFormDiv(\"" + property + "\");'>";
    html += "\n" + value;
    html += "\n</div>";
    html += "\n</div>";
    html += "\n<div class=\"formTableCell border\">";
    html += "\n<img src='http://business300.com/public/bunnycrm.net/static/images/icons/update.png' alt='Update' title='Click to update this field' class='imageIcon24' onclick='javascript:showLineEditorFormFormDiv(\"" + property + "\");'/>";
    html += "\n</div>";
    html += "\n</div>";
    html += "\n</div>";

    html += "\n</div>";

    //console.log(html);

    $("#" + srcDiv).html(html);

    if (uiType === "textarea") {
        $("#lineEditorFormInputField" + property).jqte();
    } else if (uiType === "date") {
        $("#lineEditorFormInputField" + property).datepicker({
            changeMonth: true,
            changeYear: true
        });
    } else if (uiType === "datetime") {
        $("#lineEditorFormInputField" + property).datetimepicker({
            changeMonth: true,
            changeYear: true
        });
    }

    $("#lineEditorFormFormDiv" + property).hide();
    $("#lineEditorFormDisplayDiv" + property).show();
}

function createLineEditorForCombo(srcDiv, type, rcode, property, upk) {
    var html = "";
    var value = $("#" + srcDiv + " select").val();

    html += "\n<div id=\"lineEditorFormFormDiv" + property + "\">";

    html += "\n<form id=\"lineEditorForm" + property +
            "\" action=\"rest/updateAttribute\" method=\"post\" onsubmit=\"javascript: return submitLineEditorForm('" +
            property + "');\">";

    html += "\n<input type=\"hidden\" name=\"type\" value=\"" + type + "\"></input>";
    html += "\n<input type=\"hidden\" name=\"rcode\" value=\"" + rcode + "\"></input>";
    html += "\n<input type=\"hidden\" name=\"property\" value=\"" + property + "\"></input>";
    html += "\n<input type=\"hidden\" name=\"upk\" value=\"" + upk + "\"></input>";

    html += "\n<div class=\"formTable\">";
    html += "\n<div class=\"formTableRow\">";

    //src combo html
    html += "\n<div class=\"formTableCell border\">";
    html += "\n" + $("#" + srcDiv).html();
    html += "\n</div>";

    html += "\n<div class=\"formTableCell border\" style=\"vertical-align: bottom;\">";
    //html += "\n<input type=\"submit\" value=\"Update\"></input>";
    html += "\n<img src='http://business300.com/public/bunnycrm.net/static/images/icons/save.png' alt='Save' title='Save' class='imageIcon24' onclick=\"javascript: return submitLineEditorForm('" +
            property + "');\">";
    html += "\n</div>";

    html += "\n<div class=\"formTableCell\">";
    html += "\n<div id=\"lineEditorForm" + property + "ResponseDiv\"></div>";
    html += "\n</div>";

    html += "\n</div>";
    html += "\n</div>";


    html += "\n</form>";
    html += "\n</div>"; // End form Div

    //Start display div
    html += "\n<div id=\"lineEditorFormDisplayDiv" + property + "\">";

    html += "\n<div class=\"formTable\">";
    html += "\n<div class=\"formTableRow\">";
    html += "\n<div class=\"formTableCell border\">";
    html += "\n<div id=\"lineEditorFormValueDisplayDiv" + property + "\" style=\"min-width: 220px;\" title=\"Double click to update\" ondblclick='javascript:showLineEditorFormFormDiv(\"" + property + "\");'>";
    html += "\n" + value;
    html += "\n</div>";
    html += "\n</div>";
    html += "\n<div class=\"formTableCell border\">";
    html += "\n<img src='http://business300.com/public/bunnycrm.net/static/images/icons/update.png' alt='Update' title='Click to update this field' class='imageIcon24' onclick='javascript:showLineEditorFormFormDiv(\"" + property + "\");'/>";
    html += "\n</div>";
    html += "\n</div>";
    html += "\n</div>";

    html += "\n</div>";

    //console.log(html);

    $("#" + srcDiv).html(html);

    //The combo does not have an d. A dynamic id is given to it such that it could be selected and its value could be submitted.
    $("#" + srcDiv + " select").attr("id", "lineEditorFormInputField" + property);
    $("#" + srcDiv + " select").attr("name", "value");

    $("#lineEditorFormFormDiv" + property).hide();
    $("#lineEditorFormDisplayDiv" + property).show();


}

function createLineEditorForCheckbox(checkBoxId, boType, rcode, property, upk, uiClass) {
    var valToSet = false;

    $('#' + checkBoxId).click(function () {
        var $this = $(this);
        // $this will contain a reference to the checkbox
        if ($this.is(':checked')) {
            // the checkbox was checked
            valToSet = true;
            submitLineEditorFormForCheckbox(checkBoxId, boType, rcode, property, upk, uiClass, valToSet);
        } else {
            // the checkbox was unchecked
            valToSet = false;
            submitLineEditorFormForCheckbox(checkBoxId, boType, rcode, property, upk, uiClass, valToSet);
        }
    });

}

function submitLineEditorFormForCheckbox(checkBoxId, boType, rcode, property, upk, uiClass, valToSet) {
    $.ajax({
        url: 'rest/updateAttribute',
        type: "POST",
        data: {
            type: boType,
            rcode: rcode,
            property: property,
            upk: upk,
            value: valToSet
        },
        beforeSend: function (xhr) {
        }
    }).done(function (responseText) {
        var obj = $.parseJSON(responseText);
        if (obj.success) {
            $("#lineEditorFormValueDisplayDiv" + property).html($("#lineEditorFormInputField" + property).val());
            $("#lineEditorFormDisplayDiv" + property).show();
            $("#lineEditorFormFormDiv" + property).hide();
        } else {
            alert("Unable to update value " + obj.message);
        }

    }).fail(function (jqXHR, textStatus) {
        $("#lineEditorForm" + property + "ResponseDiv").html(textStatus);
    }).always(function () {
        $("#lineEditorForm" + property + "ResponseDiv :input").attr("disabled", false);
    });

}
function showLineEditorFormFormDiv(property) {
    $("#lineEditorFormDisplayDiv" + property).hide();
    $("#lineEditorFormFormDiv" + property).show();
}
function submitLineEditorForm(property) {
    $.ajax({
        url: 'rest/updateAttribute',
        type: "POST",
        data: $("#lineEditorForm" + property).serialize(),
        beforeSend: function (xhr) {
        }
    }).done(function (responseText) {
        var obj = $.parseJSON(responseText);
        if (obj.success) {
            $("#lineEditorFormValueDisplayDiv" + property).html($("#lineEditorFormInputField" + property).val());
            $("#lineEditorFormDisplayDiv" + property).show();
            $("#lineEditorFormFormDiv" + property).hide();
        } else {
            alert("Unable to update value " + obj.message);
        }

    }).fail(function (jqXHR, textStatus) {
        $("#lineEditorForm" + property + "ResponseDiv").html(textStatus);
    }).always(function () {
        $("#lineEditorForm" + property + "ResponseDiv :input").attr("disabled", false);
    });

    return false;
}
