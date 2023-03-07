# CTS2852C - Lab 3

Git repository for Kory Keegan - Wednesday February 8, 2023 @ 12:11 AM

## Table of contents

1. [Instructions](#Instructions)
1. [Changes](#Changes)
1. [Issues](#Issues)

## Instructions

### Clone remote to local repository

In GitHub:

1. Select the `<> Code` link.
1. Select the green `Code` button.
1. Ensure **HTTPS** is selected and click the copy button to copy the remote repository URL.

In Git Bash (Windows) or Terminal (Mac, Linux)

1. Navigate to the folder where the repository should be cloned into.
1. Issue the `git clone` command followed by pasting the previously copied remote repository URL.
1. Change directory to the newly created repository folder. (Folder name is the same as the remote repository name)
1. Set your user name and email using the `git config` command. E.g. `git config user.name "your name"` and `git config user.email "your email address"`.
1. Check that the correct username and email is set using the `git config -l` command.
1. Setting and checking `user.name` and `user.email` must to be done every time the remote repository is cloned to a local repository.

Create a **develop** branch. (Only needs to be done once in a repository.)

1. Create a branch named **develop** off the main branch. E.g. `git branch develop`
1. Switch to the **develop** branch. E.g. `git checkout develop`
1. Push the branch to the remote repository. E.g. `git push -u origin develop` Creation of files should not start until the **develop** branch has been pushed to the remote repository.
1. Edit this README.md file, then at the top,
   1. replace the word **ReplaceCourseNumber** with the course number
   1. replace the word **ReplaceProjectName** with the name of the project
   1. replace the word **ReplaceFullName** with
   1. replace the word **ReplaceCurrentDateTime** with the current date/time (E.g., Monday January 10, 2022 @ 11:45 AM).
1. Save the changes.
1. Stage the changes. E.g. `git add README.md`
1. Commit the changes. E.g. `git commit -m "Replaced course, project, name and date"`
1. Push the changes to the remote repository. E.g. `git push`

Merge the **develop** branch to the **main** branch.

1. Switch to the **main** branch. E.g. `git checkout main`
1. Merge the **develop** branch into the **main** branch. E.g. `git merge develop`
1. Push the changes to the remote repository. E.g. `git push`
1. Switch to the **develop** branch. E.g. `git checkout develop`

Read the content of this README.md file.

## Changes

Steps to make changes

In GitHub:

1. Assign the issue that will be worked on to yourself. See [Issues](#Issues) below.
1. If no issue exists, open a new issue and assign it to yourself. E.g. `Create site home page` (Ensure that the title is unique and succinct. A detailed description of what work is be completed must be entered.)

In Git Bash (Windows) or Terminal (Mac, Linux):

1. Navigate to the folder where the repository was cloned into.
1. Check that the correct username and email is set using the `git config -l` command.
1. Switch to the **develop** branch and execute a `git pull` to get the latest code from the remote repository.
1. Add, modify and/or delete a file(s).
1. When the changes are complete:
   1. test the changes
   1. add the file(s) to the staging area
   1. commit the changes
   1. push the **develop** branch to the remote repository
1. Close the issue after all required changes have been committed.

Repeat these steps each time changes are to be made. **NOTE**: Ensure that a `git pull` is regularly executed while checked out on the **develop** branch to get any changes that have been pushed to the develop branch.

To keep the **develop** and **main** branches in sync, complete the following steps in the local repository:

1. Switch to the **main** branch. E.g. `git checkout main`
1. Merge the **develop** branch into the **main** branch. E.g. `git merge develop`
1. Push the changes to the remote repository. E.g. `git push`
1. Switch to the **develop** branch. E.g. `git checkout develop`
1. On the remote repository the develop branch will be even with the main branch.

## Issues

### Open an Issue

1. In the repository, select the `Issues` link.
1. Choose `New issue`.
1. Enter a unique `Title` for the issue.
1. Enter details in the `Write` tab. **Be very specific**.
1. Choose `Submit new issue`.

### Assign an Issue

1. In the repository, select the `Issues` link.
1. Select the issue that needs to be assigned.
1. Choose the `Assignees` option.
1. Select your name as the assignee to add to the issue.

### Close an Issue

1. In the repository, select the `Issues` link.
1. Select the issue that needs to assigned to one or more group members.
1. Enter closing details in the `Write` tab.
1. Choose `Close and comment`.

### Reopen a Closed an Issue

1. In the repository, select the `Issues` link.
1. Ensure `Closed` issues are displayed.
1. Select the issue that needs to be reopened.
1. Enter reopening details in the `Write` tab.
1. Choose `Reopen issue`.

### Filter issues assigned to you

1. In the repository, select the `Issues` link.
1. Choose the `Assignee` drop down.
1. Select your username from the list.

See [About issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues) for more help.
# birthdayCountdown
# birthdayCountdown
