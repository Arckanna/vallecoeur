<?php
/*
  Created on : 9 janv. 2019, 11:22:53
  Author     : val09
 */
?>
<div class="container">
    <div class="mt-4 mb-5">
        <span>
            bonjour
        </span>
    </div>

</div>
<div class="container mt-5">
    <?php require_once('views/navbar/navbar.php'); ?>
</div>
<div class="container">
    <?php
    $menu = (isset($_GET['menu'])) ? htmlspecialchars($_GET['menu']) : "presentation";
    $tabContributor = array(
        "presentation" => 'views/presentation/presentation.php',
        "experiences" => 'views/experiences/experience.php',
        "formation" => 'views/formation/formation.php',
        "competence" => 'views/competence/competence.php',
    );
    if (isset($tabContributor[$menu])) {
        require_once($tabContributor[$menu]);
    } else {
        require_once('views/error/404.php');
    }
    ?>
    </br>
    </br>
</div>

<div class="container mt-5">    </div>
<p>    </p>
<div>
<?php
// FOOTER
require_once('views/footer/footer.php');
?>
</div>
