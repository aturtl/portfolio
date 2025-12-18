function copy()
{
    if (confirm("Copy email address?")) {
        navigator.clipboard.writeText("jonmccam@gmail.com");
        alert("Copied");
    }
}