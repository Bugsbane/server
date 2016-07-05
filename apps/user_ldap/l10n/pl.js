OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Nie udało się wyczyścić mapowania.",
    "Failed to delete the server configuration" : "Nie można usunąć konfiguracji serwera",
    "The configuration is invalid: anonymous bind is not allowed." : "Konfiguracja jest nieprawidłowa: anonimowe złączenie nie jest dozwolone.",
    "The configuration is valid and the connection could be established!" : "Konfiguracja jest prawidłowa i można ustanowić połączenie!",
    "The configuration is valid, but the Bind failed. Please check the server settings and credentials." : "Konfiguracja jest prawidłowa, ale Bind nie. Sprawdź ustawienia serwera i poświadczenia.",
    "The configuration is invalid. Please have a look at the logs for further details." : "Konfiguracja jest nieprawidłowa. Proszę rzucić okiem na dzienniki dalszych szczegółów.",
    "No action specified" : "Nie określono akcji",
    "No configuration specified" : "Nie określono konfiguracji",
    "No data specified" : "Nie określono danych",
    " Could not set configuration %s" : "Nie można ustawić konfiguracji %s",
    "Action does not exist" : "Akcja nie istnieje",
    "The Base DN appears to be wrong" : "Base DN wygląda na błedne",
    "Testing configuration…" : "Testowanie konfiguracji...",
    "Configuration incorrect" : "Konfiguracja niepoprawna",
    "Configuration incomplete" : "Konfiguracja niekompletna",
    "Configuration OK" : "Konfiguracja poprawna",
    "Select groups" : "Wybierz grupy",
    "Select object classes" : "Wybierz obiekty klas",
    "Please check the credentials, they seem to be wrong." : "Sprawdź dane logowania, wydają się być nieprawidłowe.",
    "Please specify the port, it could not be auto-detected." : "Podaj port, nie można ustalić go automatycznie.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "Base DN nie mógł zostać wykryty automatycznie, proszę sprawdzić ustawienia hosta, port oraz dane dostępowe",
    "Could not detect Base DN, please enter it manually." : "Nie udało się wykryć Base DN, proszę podać ręcznie.",
    "{nthServer}. Server" : "{nthServer}. Serwer",
    "No object found in the given Base DN. Please revise." : "Brak obiektów w podanym Base DN. Proszę sprawdzić.",
    "More than 1,000 directory entries available." : "Ponad 1,000 wpisów katalogowych dostępne.",
    " entries available within the provided Base DN" : "wpisów dostępnych w podanym Base DN ",
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Wystąpił błąd. Proszę sprawdzić Base DN oraz ustawienia połączenia i dane dostępowe.",
    "Do you really want to delete the current Server Configuration?" : "Czy chcesz usunąć bieżącą konfigurację serwera?",
    "Confirm Deletion" : "Potwierdź usunięcie",
    "Mappings cleared successfully!" : "Mapowanie wyczyszczone!",
    "Error while clearing the mappings." : "Błąd podczas czyszczenia mapowania.",
    "Mode switch" : "Przełącznik trybów",
    "Select attributes" : "Wybierz atrybuty",
    "_%s group found_::_%s groups found_" : ["%s znaleziona grupa","%s znalezionych grup","%s znalezionych grup"],
    "_%s user found_::_%s users found_" : ["%s znaleziony użytkownik","%s znalezionych użytkowników","%s znalezionych użytkowników"],
    "Could not detect user display name attribute. Please specify it yourself in advanced ldap settings." : "Nie udało się wykryć atrybutu wyświetlanej nazwy użytkownika. Określ ją w zaawansowanych ustawieniach LDAP.",
    "Could not find the desired feature" : "Nie można znaleźć żądanej funkcji",
    "Invalid Host" : "Niepoprawny Host",
    "Server" : "Serwer",
    "Users" : "Użytkownicy",
    "Login Attributes" : "Atrybuty logowania",
    "Groups" : "Grupy",
    "Test Configuration" : "Konfiguracja testowa",
    "Help" : "Pomoc",
    "Groups meeting these criteria are available in %s:" : "Przyłączenie do grupy z tymi ustawieniami dostępne jest w %s:",
    "Only from these groups:" : "Tylko z tych grup:",
    "Search groups" : "Przeszukaj grupy",
    "Available groups" : "Dostępne grupy",
    "Selected groups" : "Wybrane grupy",
    "Edit LDAP Query" : "Edytuj zapytanie LDAP",
    "LDAP Filter:" : "Filtr LDAP",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "Filtr określa, które grupy LDAP powinny mieć dostęp do instancji %s.",
    "Verify settings and count groups" : "Zweryfikuj ustawienia i policz grupy",
    "When logging in, %s will find the user based on the following attributes:" : "Podczas logowania, %s znajdzie użytkownika na podstawie następujących atrybutów:",
    "LDAP / AD Username:" : "Nazwa użytkownika LDAP / AD:",
    "LDAP / AD Email Address:" : "Adres email LDAP/AD:",
    "Other Attributes:" : "Inne atrybuty:",
    "Defines the filter to apply, when login is attempted. %%uid replaces the username in the login action. Example: \"uid=%%uid\"" : "Określa jakiego filtru użyć podczas próby zalogowania. %%uid zastępuje nazwę użytkownika w procesie logowania. Przykład: \"uid=%%uid\"",
    "Verify settings" : "Weryfikuj ustawienia",
    "1. Server" : "1. Serwer",
    "%s. Server:" : "%s. Serwer:",
    "Copy current configuration into new directory binding" : "Kopiuje aktualną konfigurację do nowej lokalizacji",
    "Delete the current configuration" : "Usuwa aktualną konfigurację",
    "Host" : "Host",
    "You can omit the protocol, except you require SSL. Then start with ldaps://" : "Można pominąć protokół, z wyjątkiem wymaganego protokołu SSL. Następnie uruchom z ldaps://",
    "Port" : "Port",
    "Detect Port" : "Wykryj port",
    "User DN" : "Użytkownik DN",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "DN użytkownika klienta, z którym powiązanie wykonuje się, np. uid=agent,dc=example,dc=com. Dla dostępu anonimowego pozostawić DN i hasło puste",
    "Password" : "Hasło",
    "For anonymous access, leave DN and Password empty." : "Dla dostępu anonimowego pozostawić DN i hasło puste.",
    "One Base DN per line" : "Jedna baza DN na linię",
    "You can specify Base DN for users and groups in the Advanced tab" : "Bazę DN można określić dla użytkowników i grup w karcie Zaawansowane",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Zapobiega automatycznym zapytaniom LDAP. Lepsze dla większych instalacji, lecz wymaga pewnej wiedzy o LDAP.",
    "Manually enter LDAP filters (recommended for large directories)" : "Ręcznie wprowadzaj filtry LDAP (zalecane dla dużych katalogów)",
    "The filter specifies which LDAP users shall have access to the %s instance." : "Filtr określa, którzy użytkownicy LDAP powinni mieć dostęp do instancji %s.",
    "Saving" : "Zapisuję",
    "Back" : "Wróć",
    "Continue" : "Kontynuuj ",
    "LDAP" : "LDAP",
    "Expert" : "Ekspert",
    "Advanced" : "Zaawansowane",
    "<b>Warning:</b> Apps user_ldap and user_webdavauth are incompatible. You may experience unexpected behavior. Please ask your system administrator to disable one of them." : "<b>Ostrzeżenie:</b> Aplikacje user_ldap i user_webdavauth nie są  kompatybilne. Mogą powodować nieoczekiwane zachowanie. Poproś administratora o wyłączenie jednej z nich.",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Ostrzeżenie:</b>  Moduł PHP LDAP nie jest zainstalowany i nie będzie działał. Poproś administratora o włączenie go.",
    "Connection Settings" : "Konfiguracja połączeń",
    "Configuration Active" : "Konfiguracja archiwum",
    "When unchecked, this configuration will be skipped." : "Gdy niezaznaczone, ta konfiguracja zostanie pominięta.",
    "Backup (Replica) Host" : "Kopia zapasowa (repliki) host",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Dać opcjonalnie  hosta kopii zapasowej . To musi być repliką głównego serwera LDAP/AD.",
    "Backup (Replica) Port" : "Kopia zapasowa (repliki) Port",
    "Disable Main Server" : "Wyłącz serwer główny",
    "Only connect to the replica server." : "Połącz tylko do repliki serwera.",
    "Turn off SSL certificate validation." : "Wyłączyć sprawdzanie poprawności certyfikatu SSL.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Nie polecane, używać tylko w celu testowania! Jeśli połączenie działa tylko z tą opcją, zaimportuj certyfikat SSL serwera LDAP na swój %s.",
    "Cache Time-To-Live" : "Przechowuj czas życia",
    "in seconds. A change empties the cache." : "w sekundach. Zmiana opróżnia pamięć podręczną.",
    "Directory Settings" : "Ustawienia katalogów",
    "User Display Name Field" : "Pole wyświetlanej nazwy użytkownika",
    "The LDAP attribute to use to generate the user's display name." : "Atrybut LDAP służący do generowania wyświetlanej nazwy użytkownika ownCloud.",
    "Base User Tree" : "Drzewo bazy użytkowników",
    "One User Base DN per line" : "Jeden użytkownik Bazy DN na linię",
    "User Search Attributes" : "Szukaj atrybutów",
    "Optional; one attribute per line" : "Opcjonalnie; jeden atrybut w wierszu",
    "Group Display Name Field" : "Pole wyświetlanej nazwy grupy",
    "The LDAP attribute to use to generate the groups's display name." : "Atrybut LDAP służący do generowania wyświetlanej nazwy grupy ownCloud.",
    "Base Group Tree" : "Drzewo bazy grup",
    "One Group Base DN per line" : "Jedna grupa bazy DN na linię",
    "Group Search Attributes" : "Grupa atrybutów wyszukaj",
    "Group-Member association" : "Członek grupy stowarzyszenia",
    "Dynamic Group Member URL" : "URL Członka Grupy Dynamicznej",
    "Nested Groups" : "Grupy zagnieżdżone",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "Kiedy włączone, grupy, które zawierają grupy, są wspierane. (Działa tylko, jeśli członek grupy ma ustawienie DNs)",
    "Paging chunksize" : "Wielkość stronicowania",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "Długość łańcucha jest używana do stronicowanych wyszukiwań LDAP, które mogą zwracać duże zbiory jak lista grup, czy użytkowników. (Ustawienie na 0 wyłącza stronicowane wyszukiwania w takich sytuacjach.)",
    "Special Attributes" : "Specjalne atrybuty",
    "Quota Field" : "Pole przydziału",
    "Quota Default" : "Przydział domyślny",
    "in bytes" : "w bajtach",
    "Email Field" : "Pole email",
    "User Home Folder Naming Rule" : "Reguły nazewnictwa folderu domowego użytkownika",
    "Leave empty for user name (default). Otherwise, specify an LDAP/AD attribute." : "Pozostaw puste dla user name (domyślnie). W przeciwnym razie podaj atrybut LDAP/AD.",
    "Internal Username" : "Wewnętrzna nazwa użytkownika",
    "Internal Username Attribute:" : "Wewnętrzny atrybut nazwy uzżytkownika:",
    "Override UUID detection" : "Zastąp wykrywanie UUID",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "Domyślnie, atrybut UUID jest wykrywany automatycznie. Atrybut UUID jest używany do niepodważalnej identyfikacji użytkowników i grup LDAP. Również wewnętrzna nazwa użytkownika zostanie stworzona na bazie UUID, jeśli nie zostanie podana powyżej. Możesz nadpisać to ustawienie i użyć atrybutu wedle uznania. Musisz się jednak upewnić, że atrybut ten może zostać pobrany zarówno dla użytkowników, jak i grup i jest unikalny. Pozostaw puste dla domyślnego zachowania. Zmiany będą miały wpływ tylko na nowo przypisanych (dodanych) użytkowników i grupy LDAP.",
    "UUID Attribute for Users:" : "Atrybuty UUID dla użytkowników:",
    "UUID Attribute for Groups:" : "Atrybuty UUID dla grup:",
    "Username-LDAP User Mapping" : "Mapowanie użytkownika LDAP",
    "Usernames are used to store and assign (meta) data. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "Nazwy użytkowników służą do przechowywania i przypisywania (meta) danych. W celu dokładnego określenia i rozpoznawania użytkowników, każdy użytkownik LDAP ma przypisaną wewnętrzną nazwę użytkownika. Wymaga to mapowania nazwy użytkownika do użytkownika LDAP. Utworzona nazwa użytkownika jest odwzorowywana na UUID użytkownika LDAP. Dodatkowo DN są buforowane, także w celu zmniejszenia oddziaływania LDAP, ale nie są stosowane do identyfikacji. Po zmianie DN, będzie można znaleźć zmiany. Wewnętrzna nazwa jest używana wszędzie. Usuwanie mapowania będzie miało wpływ wszędzie. Usuwanie mapowania nie jest wrażliwe na konfiguracje, dotyczy to wszystkich konfiguracji LDAP! Nigdy nie usuwaj mapowania w środowisku produkcyjnym, jest to dopuszczalne tylko w fazie eksperymentalnej, testowej.",
    "Clear Username-LDAP User Mapping" : "Czyść Mapowanie użytkownika LDAP",
    "Clear Groupname-LDAP Group Mapping" : "Czyść Mapowanie nazwy grupy LDAP"
},
"nplurals=3; plural=(n==1 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);");
