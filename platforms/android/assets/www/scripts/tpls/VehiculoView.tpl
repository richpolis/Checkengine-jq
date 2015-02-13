<div data-role="header">
    <a id="inicio" href="#" class="ui-btn ui-icon-carat-l ui-btn-icon-notext ui-corner-all ui-btn-left">No text</a>
    <h1 class="title">Checkengine - Vehiculo</h1>
</div>
<div role="main" class="ui-content">
    <form method="post" action="#">
        <div class="row">
            <div class="col col-4">
                <figure class="imagen-usuario">
                    <img src="images/logo.png" style="max-width: 120px;">
                </figure>
            </div>
            <div class="col col-8 col-titulo">
                <h2 class="titulo titulo-naranja" style="margin-top: 1.5em; text-align: center;">
                    Vehiculo
                </h2>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="ui-field-contain">
            <select name="tipoVehiculo" id="tipoVehiculo">
                <option value="1">Automovil</option>
                <option value="2">Motocicleta</option>
                <option value="3">Camion</option>
            </select>
        </div>
        <input type="text" name="marca" id="fname" placeholder="marca">
        <input type="text" name="modelo" id="fname" placeholder="modelo">
        <input type="text" name="year" id="fname" placeholder="año">
        <input type="text" name="puertas" id="fname" placeholder="puertas">
        <input type="text" name="cilindros" id="fname" placeholder="cilindros">
        <input type="text" name="kms" id="fname" placeholder="kms">
        <input type="text" name="combustible" id="fname" placeholder="combustible">
        <input type="text" name="transmision" id="fname" placeholder="transmision">
        <div class="text-center">
        <a id="principal" href="#" class="ui-btn ui-btn-corner-all ui-btn-inline ui-btn-b" >Registrar</a>
        <br/>
        </div>
    </form>
</div>