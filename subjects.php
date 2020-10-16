<!DOCTYPE html>
<html lang="en" data-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Subject</title>
    <!--poppins-->
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <!--fontawesome-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
        crossorigin="anonymous" />
    <!--ColorScheme-->
    <link rel="stylesheet" type="text/css" href="SASS/colorFile.css">
    <!--Header and Footer-->
    <link rel="stylesheet" type="text/css" href="SASS/header_footer_nav.css">
    <!--responsive-->
    <link rel="stylesheet" type="text/css" href="SASS/responsive.css">
    <!--subjects-->
    <link rel="stylesheet" type="text/css" href="SASS/subjects.css">
</head>

<body>
    <?php include 'php/header.php'; ?> 
    <?php include 'php/seasame.php'; ?> 
    <main id="content">
        <section id="streamName">
            <h2 id="nameOfStream"></h2>
        </section>
        <section id="stickyNotes" class="stickyNotes">
        </section>
        <main id="subjectList2">
            <section id="stickyNotes2" class="stickyNotes">
            </section>
        </main>
    </main>
    <section id="buttons">
        <i id="button" class="fas fa-angle-right"></i>
    </section>
    <?php include 'php/footer.php'; ?> 
   
    <script src="TS/nav.js"></script>
    <script src="TS/subjects.js"></script>
    <script src="TS/colorSubjects.js"></script>
    <script src="TS/darkmode.js"></script>
</body>

</html>